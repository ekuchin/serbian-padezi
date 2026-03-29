<template>
  <div ref="selectorContainerRef" class="selector-container">
    <div class="top-row" :style="{ paddingInline: topRowPadding }">
      <div class="selector-group left-group">
        <div class="button-row left-row">
          <button
            v-for="g in ['masculine', 'feminine', 'neuter']"
            :key="g"
            :class="['selector-btn', { active: localGender === g }]"
            @click="selectGender(g as Gender)"
          >
            {{ genderLabel(g) }}
          </button>
        </div>
      </div>

      <div class="selector-group right-group">
        <div class="button-row right-row">
          <button
            v-for="n in ['singular', 'plural']"
            :key="n"
            :class="['selector-btn', { active: localNumber === n }]"
            @click="selectNumber(n as Quantity)"
          >
            {{ numberLabel(n) }}
          </button>
        </div>
      </div>
    </div>

    <div class="selector-group">
      <div class="button-row cases-row">
        <div ref="casesClusterRef" class="cases-cluster">
          <button
            v-for="c in [
              'nominative',
              'genitive',
              'dative',
              'accusative',
              'locative',
              'instrumental',
            ]"
            :key="c"
            :class="['selector-btn', { active: localCase === c }]"
            @click="selectCase(c as Case)"
          >
            {{ caseLabel(c) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { CaseName as Case, Gender, Quantity } from '../data/reference';

interface Props {
  gender?: Gender | '';
  number?: Quantity | '';
  case?: Case | '';
}

const props = withDefaults(defineProps<Props>(), {
  gender: '',
  number: '',
  case: '',
});

const emit = defineEmits<{
  'update:gender': [value: Gender];
  'update:number': [value: Quantity];
  'update:case': [value: Case];
}>();

const localGender = ref<Gender | ''>(props.gender);
const localNumber = ref<Quantity | ''>(props.number);
const localCase = ref<Case | ''>(props.case);
const selectorContainerRef = ref<HTMLElement | null>(null);
const casesClusterRef = ref<HTMLElement | null>(null);
const topRowPadding = ref('0px');
let resizeObserver: ResizeObserver | null = null;

const syncTopRowPadding = () => {
  if (!selectorContainerRef.value || !casesClusterRef.value) return;
  const containerWidth = selectorContainerRef.value.getBoundingClientRect().width;
  const clusterWidth = casesClusterRef.value.getBoundingClientRect().width;
  const sidePadding = Math.max(0, (containerWidth - clusterWidth) / 2);
  topRowPadding.value = `${sidePadding}px`;
};

watch(() => props.gender, (newVal) => {
  localGender.value = newVal || '';
});

watch(() => props.number, (newVal) => {
  localNumber.value = newVal || '';
});

watch(() => props.case, (newVal) => {
  localCase.value = newVal || '';
});

onMounted(() => {
  syncTopRowPadding();
  if (typeof ResizeObserver !== 'undefined' && selectorContainerRef.value && casesClusterRef.value) {
    resizeObserver = new ResizeObserver(syncTopRowPadding);
    resizeObserver.observe(selectorContainerRef.value);
    resizeObserver.observe(casesClusterRef.value);
  } else {
    window.addEventListener('resize', syncTopRowPadding);
  }
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  window.removeEventListener('resize', syncTopRowPadding);
});

const selectGender = (g: Gender) => {
  localGender.value = g;
  emit('update:gender', g);
};

const selectNumber = (n: Quantity) => {
  localNumber.value = n;
  emit('update:number', n);
};

const selectCase = (c: Case) => {
  localCase.value = c;
  emit('update:case', c);
};

const genderLabel = (g: string): string => {
  const labels: Record<string, string> = {
    masculine: 'Muški',
    feminine: 'Ženski',
    neuter: 'Srednji',
  };
  return labels[g] || g;
};

const numberLabel = (n: string): string => {
  const labels: Record<string, string> = {
    singular: 'Jednina',
    plural: 'Množina',
  };
  return labels[n] || n;
};

const caseLabel = (c: string): string => {
  const labels: Record<string, string> = {
    nominative: 'Nominativ',
    genitive: 'Genitiv',
    dative: 'Dativ',
    accusative: 'Akuzativ',
    locative: 'Lokativ',
    instrumental: 'Instrumental',
  };
  return labels[c] || c;
};
</script>

<style scoped>
.selector-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
}

.top-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}

.selector-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  flex: 1;
}

.left-group {
  align-items: flex-start;
}

.right-group {
  align-items: flex-end;
}

label {
  font-weight: bold;
  font-size: 16px;
  color: #222;
}

.button-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.left-row {
  justify-content: flex-start;
  flex-wrap: nowrap;
}

.right-row {
  justify-content: flex-end;
  flex-wrap: nowrap;
}

.cases-row {
  justify-content: center;
  gap: 8px;
}

.cases-cluster {
  display: inline-flex;
  gap: 8px;
  flex-wrap: wrap;
}

.cases-row .selector-btn {
  justify-content: center;
}

.selector-btn {
  padding: 10px 16px;
  border: 2px solid #bdbdbd;
  background-color: #ffffff;
  color: #222;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.selector-btn:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

.selector-btn.active {
  background-color: #bdbdbd;
  border-color: #8f8f8f;
  box-shadow: none;
  font-weight: 600;
  color: #111;
}

.selector-btn.active:hover {
  background-color: #a7a7a7;
}
</style>
