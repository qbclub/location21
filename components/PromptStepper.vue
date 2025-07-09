<script setup lang="ts">
import type { PromptForm } from "~/types/prompt-form.interface"

const emit = defineEmits(['submit'])
const router = useRouter();

let stepperItems = ref(['Универсальность', 'Уход', 'Периодичность коррекции', 'Формальность', 'Тип волос', 'Форма лица', 'Сгенерировать'])

let selectVariants = ref({
  universal: [
    { display: "🧒 До 18 лет — подросткам", value: "До 18 лет — подросткам" },
    { display: "🧑 18–35 лет — для молодёжи", value: "18–35 лет — для молодёжи" },
    { display: "🧔‍♂️ 35+ лет — для зрелого возраста", value: "35+ лет — для зрелого возраста" },
    { display: "👥 Все возрасты", value: "Все возрасты" },
  ],
  hairStyling: [
    { display: "💨 — не требует укладки", value: "не требует укладки" },
    { display: "🪮 — лёгкая укладка", value: "лёгкая укладка" },
    { display: "🧴 — нужна стайлинг-продукция", value: "нужна стайлинг-продукция" }
  ],
  haircutFrequency: [
    { display: "🗓️ — раз в месяц", value: "раз в месяц" },
    { display: "⏳ — держит форму долго", value: "держит форму долго" },
    { display: "🔁 — требует частого обновления", value: "требует частого обновления" }
  ],
  formalStyle: [
    { display: "💼 — деловой стиль", value: "деловой стиль" },
    { display: "👔 — универсально", value: "универсально" },
    { display: "🧢 — повседневно", value: "повседневно" }
  ],
  hairType: [
    { display: "➿ — вьющиеся", value: "вьющиеся" },
    { display: "〰️ — прямые", value: "прямые" },
    { display: "🔁 — любые", value: "любые" }
  ],
  faceShape: [
    { display: "🔵 — круглое", value: "круглое" },
    { display: "⬛ — квадратное", value: "квадратное" },
    { display: "🔷 — ромбовидное", value: "ромбовидное" },
    { display: "🤷🏻‍♂️ — не знаю", value: "не знаю" }
  ],
  additional: [
    { display: "🧔🏻‍♂️ — стрижка бороды", value: "стрижка бороды" },
    { display: "🧖🏻 — спа процедуры", value: "спа процедуры" },
    { display: "💆🏻‍♂️ — массаж головы", value: "массаж головы" }
  ]
})

let currentStep = ref<number>(1)
let isLastStep = computed<boolean>(() => {
  return currentStep.value === stepperItems.value.length;
});

let promptForm = ref<PromptForm>({
  universal: "",
  hairStyling: "",
  haircutFrequency: "",
  formalStyle: "",
  hairType: "",
  faceShape: "",
  additional: "",
})

let universal = ref<number[]>([])
watch(universal, (newValue) => {
  if (newValue.includes(3) && newValue.length > 1) {
    universal.value = [3]
    return;
  }
  let res = "";
  for (let idx of newValue) {
    // Берем только .value
    res += selectVariants.value.universal[idx].value + " ";
  }
  promptForm.value.universal = res.trim();
})

let hairStyling = ref<number[]>([])
watch(hairStyling, (newValue) => {
  let res = "";
  for (let idx of newValue) {
    // Берем только .value
    res += selectVariants.value.hairStyling[idx].value + " ";
  }
  promptForm.value.hairStyling = res.trim();
})

let haircutFrequency = ref<number[]>([])
watch(haircutFrequency, (newValue) => {
  let res = "";
  for (let idx of newValue) {
    // Берем только .value
    res += selectVariants.value.haircutFrequency[idx].value + " ";
  }
  promptForm.value.haircutFrequency = res.trim();
})

let formalStyle = ref<number | null>(null)
watch(formalStyle, (newValue: number | null) => {
  if (newValue != null) {
    // Берем только .value
    promptForm.value.formalStyle = selectVariants.value.formalStyle[newValue].value;
  } else {
    promptForm.value.formalStyle = "";
  }
})

let hairType = ref<number | null>(null)
watch(hairType, (newValue: number | null) => {
  if (newValue != null) {
    // Берем только .value
    promptForm.value.hairType = selectVariants.value.hairType[newValue].value;
  } else {
    promptForm.value.hairType = "";
  }
})

let faceShape = ref<number | null>(null)
watch(faceShape, (newValue: number | null) => {
  if (newValue != null) {
    // Берем только .value
    promptForm.value.faceShape = selectVariants.value.faceShape[newValue].value;
  } else {
    promptForm.value.faceShape = "";
  }
})

let additional = ref<number[] | []>([])
watch(additional, (newValue: number[] | []) => {
  // Собираем значения через map и join - это более кратко и чисто
  promptForm.value.additional = newValue
    .map(idx => selectVariants.value.additional[idx].value)
    .join(', ');
})

watch(promptForm, (newValue) => {
  console.log("Updated promptForm:", newValue);
}, { deep: true })

function submit() {
  emit("submit", promptForm.value)
}
</script>
<template>
  <ClientOnly>
    <v-stepper v-model="currentStep" :items="stepperItems" next-text="далее" prev-text="назад" mobile bg-color="#202020"
      theme="myCustomDarkTheme">
      <!-- 2. Обновляем шаблон, чтобы использовать .display для текста и .value для ключа -->
      <template v-slot:item.1>
        <v-sheet>
          <v-responsive class="overflow-y-auto">
            <p class="text-2xl font-medium mb-4">{{ stepperItems[0] }}</p>

            <v-chip-group v-model="universal" selected-class="text-primary" multiple column>
              <v-chip v-for="tag in selectVariants.universal" :key="tag.value" :text="tag.display"
                density="default"></v-chip>
            </v-chip-group>
          </v-responsive>
        </v-sheet>
      </template>

      <template v-slot:item.2>
        <v-sheet>
          <v-responsive class="overflow-y-auto">
            <p class="text-2xl font-medium mb-4">{{ stepperItems[1] }}</p>

            <v-chip-group v-model="hairStyling" selected-class="text-primary" multiple column>
              <v-chip v-for="tag in selectVariants.hairStyling" :key="tag.value" :text="tag.display"
                density="default"></v-chip>
            </v-chip-group>
          </v-responsive>
        </v-sheet>
      </template>

      <template v-slot:item.3>
        <v-sheet>
          <v-responsive class="overflow-y-auto">
            <p class="text-2xl font-medium mb-4">{{ stepperItems[2] }}</p>

            <v-chip-group v-model="haircutFrequency" selected-class="text-primary" multiple column>
              <v-chip v-for="tag in selectVariants.haircutFrequency" :key="tag.value" :text="tag.display"
                density="default"></v-chip>
            </v-chip-group>
          </v-responsive>
        </v-sheet>
      </template>

      <template v-slot:item.4>
        <v-sheet>
          <v-responsive class="overflow-y-auto">
            <p class="text-2xl font-medium mb-4">{{ stepperItems[3] }}</p>

            <v-chip-group v-model="formalStyle" selected-class="text-primary" column>
              <v-chip v-for="tag in selectVariants.formalStyle" :key="tag.value" :text="tag.display"
                density="default"></v-chip>
            </v-chip-group>
          </v-responsive>
        </v-sheet>
      </template>

      <template v-slot:item.5>
        <v-sheet>
          <v-responsive class="overflow-y-auto">
            <p class="text-2xl font-medium mb-4">{{ stepperItems[4] }}</p>

            <v-chip-group v-model="hairType" selected-class="text-primary" column>
              <v-chip v-for="tag in selectVariants.hairType" :key="tag.value" :text="tag.display"
                density="default"></v-chip>
            </v-chip-group>
          </v-responsive>
        </v-sheet>
      </template>

      <template v-slot:item.6>
        <v-sheet>
          <v-responsive class="overflow-y-auto">
            <p class="text-2xl font-medium mb-4">{{ stepperItems[5] }}</p>

            <v-chip-group v-model="faceShape" selected-class="text-primary" column>
              <v-chip v-for="tag in selectVariants.faceShape" :key="tag.value" :text="tag.display"
                density="default"></v-chip>
            </v-chip-group>
          </v-responsive>
        </v-sheet>
      </template>

      <template v-slot:item.7>
        <v-sheet>
          <v-responsive class="overflow-y-auto py-5">
            <v-row>
              <v-col cols="12">
                <p class="text-2xl font-medium mb-4">Доведите образ до совершенства</p>
                <p class="font-light text-sm text-stone-100">Хорошая стрижка - 90% успеха, добавьте ещё 10% своим
                  выбором</p>
              </v-col>
              <v-col cols="12">
                <v-chip-group v-model="additional" selected-class="text-primary" column multiple>
                  <v-chip v-for="tag in selectVariants.additional" :key="tag.value" :text="tag.display"
                    density="default"></v-chip>
                </v-chip-group>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <v-btn @click="submit" block color="accent">отправить</v-btn>
              </v-col>
            </v-row>
          </v-responsive>
        </v-sheet>
      </template>
    </v-stepper>

    <NuxtLink to="https://n962263.yclients.com/company/894109/personal/menu?o=">
      <v-fab icon="mdi-lightbulb-on-outline" variant="tonal" class="floating-btn"></v-fab>
    </NuxtLink>
  </ClientOnly>
</template>
<style scoped>
.floating-btn {
  position: absolute !important;
  bottom: 25px !important;
  right: 32px !important;
}
</style>