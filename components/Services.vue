<script setup>
let services = ref([])
const tab = ref(0)
let serviceType = ref(["Стрижка"])
const groupByCategory = computed(() => {
    const result = [];
    const categoryMap = {};

    for (const service of services.value) {
        const category = service["Категория"];
        const type = service["Тип"];

        if (!categoryMap[category]) {
            categoryMap[category] = {
                "Категория": category,
                "Типы": []
            };
            result.push(categoryMap[category]);
        }

        // Найти или создать тип внутри текущей категории
        let typeGroup = categoryMap[category]["Типы"].find(t => t["ТипУслуги"] === type);
        if (!typeGroup) {
            typeGroup = {
                "ТипУслуги": type,
                "Услуги": []
            };
            categoryMap[category]["Типы"].push(typeGroup);
        }

        const serviceCopy = { ...service };
        delete serviceCopy["Категория"];
        delete serviceCopy["Тип"];
        typeGroup["Услуги"].push(serviceCopy);
    }

    // Сортировка услуг в каждом типе по убыванию "Ценаот", затем по алфавиту
    for (const category of result) {
        for (const typeGroup of category["Типы"]) {
            typeGroup["Услуги"].sort((a, b) => {
                if (b["Ценаот"] !== a["Ценаот"]) {
                    return b["Ценаот"] - a["Ценаот"];
                }
                return a["Название"].localeCompare(b["Название"], "ru", { sensitivity: "base" });
            });
        }
    }

    return result;
});


onMounted(async () => {
    const res = await fetch('/services.json')
    services.value = await res.json()

})
</script>
<template>

    <v-sheet color="background" class="pa-2 pa-md-4">
        <v-tabs v-model="tab" grow align-tabs="center" color="accent">
            <v-tab v-for="category, index in groupByCategory" :value="index"> {{ category.Категория }}</v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="category, index in groupByCategory" :key="index" :value="index">
                <v-container fluid>
                    <v-row>
                        <v-col cols="12" v-for="type, index in category.Типы">
                            <v-expansion-panels bg-color="background" flat rounded="0" v-model="serviceType" multiple="">
                                <v-expansion-panel :value="type.ТипУслуги">
                                    <v-row>
                                        <v-col cols="12" md="4">
                                            <v-expansion-panel-title class="text-body-2 text-md-body-1">

                                                <h2 class="text-center">
                                                    {{ type.ТипУслуги
                                                    }}
                                                </h2>
                                            </v-expansion-panel-title>
                                        </v-col>
                                    </v-row>

                                    <v-expansion-panel-text class="text-caption pa-2">
                                        <v-row>
                                            <v-col cols="12" md="6" class="pa-0" v-for="service, index in type.Услуги">

                                                <v-expansion-panels bg-color="background" flat rounded="0">
                                                    <v-expansion-panel>
                                                        <v-expansion-panel-title class="text-body-2 text-md-body-1 ">
                                                            <v-row>
                                                                <v-col>
                                                                    {{ service.Название
                                                                    }}
                                                                </v-col>
                                                                <v-col cols="3"
                                                                    class="d-flex align-center justify-center">
                                                                    <b>{{ service.Ценаот.toLocaleString('ru-RU') }}
                                                                        &#8381;</b>
                                                                </v-col>
                                                            </v-row>

                                                        </v-expansion-panel-title>
                                                        <v-expansion-panel-text class="text-caption pa-2">
                                                            {{ service.Описание }}
                                                            <div class="text-end">
                                                                <b>Длительность: {{ service.Длительность / 60 }} мин.
                                                                </b>
                                                            </div>

                                                        </v-expansion-panel-text>
                                                    </v-expansion-panel>
                                                </v-expansion-panels>
                                            </v-col>
                                        </v-row>

                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                    </v-row>






                </v-container>
            </v-tabs-window-item>
        </v-tabs-window>
    </v-sheet>
    <!-- <v-divider :thickness="6" class="border-opacity-100" color="accent"></v-divider> -->
</template>
<style scoped></style>