<template>
  <div class="result-container">
    <div v-if="hasSelection" class="result-content">
      <div class="result-section">
        <h3>Окончание существительных</h3>
        <p class="ending">{{ caseData?.nounEnding }}</p>
      </div>

      <div class="result-section">
        <h3>Окончание прилагательных</h3>
        <p class="ending">{{ caseData?.adjectiveEnding }}</p>
      </div>

      <div class="result-section">
        <h3>Предлоги</h3>
        <ul v-if="prepositions.length > 0" class="prepositions">
          <li v-for="(prep, idx) in prepositions" :key="idx">{{ prep }}</li>
        </ul>
        <p v-else class="none">Нет типичных предлогов</p>
      </div>

      <div class="result-section">
        <h3>Пример</h3>
        <p class="example">{{ caseData?.nounExample }}</p>
      </div>
    </div>

    <div v-else class="no-selection">
      <p>Выберите род, число и падеж для просмотра информации</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CaseName as Case, Gender, Quantity, ReferenceInfo, casePrepositions, referenceData } from '../data/reference';

export default defineComponent({
  name: 'ResultDisplay',
  props: {
    gender: {
      type: String as PropType<Gender>,
      default: '',
    },
    number: {
      type: String as PropType<Quantity>,
      default: '',
    },
    case: {
      type: String as PropType<Case>,
      default: '',
    },
  },
  computed: {
    hasSelection(): boolean {
      return !!this.gender && !!this.number && !!this.case;
    },
    caseData(): ReferenceInfo | null {
      if (!this.hasSelection) return null;
      return referenceData[this.case!][this.gender!][this.number!] || null;
    },
    prepositions(): string[] {
      if (!this.hasSelection) return [];
      return casePrepositions[this.case!] || [];
    },
  },
});
</script>

<style scoped>
.result-container {
  background-color: #f5f5f5;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.result-content {
  width: 100%;
}

.result-section {
  margin-bottom: 25px;
}

.result-section:last-child {
  margin-bottom: 0;
}

h3 {
  color: #333;
  font-size: 16px;
  margin: 0 0 10px 0;
  border-bottom: 2px solid #777777;
  padding-bottom: 8px;
}

.ending {
  font-size: 18px;
  font-weight: bold;
  color: #e74c3c;
  margin: 0;
  padding: 10px;
  background-color: #fff;
  border-left: 4px solid #e74c3c;
}

.prepositions {
  list-style: none;
  padding: 0;
  margin: 0;
}

.prepositions li {
  padding: 8px 0;
  color: #555;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}

.prepositions li:last-child {
  border-bottom: none;
}

.example {
  font-size: 14px;
  color: #666;
  margin: 0;
  padding: 10px;
  background-color: #fff;
  border-left: 4px solid #999999;
  font-style: italic;
}

/* adjective endings use the same .ending style as noun endings */

.none {
  color: #999;
  font-style: italic;
  margin: 0;
}

.no-selection {
  text-align: center;
  color: #999;
  font-size: 16px;
}
</style>


