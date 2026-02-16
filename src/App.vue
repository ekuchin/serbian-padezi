<template>
  <div id="app">
    <header class="header">
      <h1>Сербские падежи (Padezi) - Справочник</h1>
      <p class="subtitle">
        Выберите род, число и падеж для просмотра окончаний, предлогов и примеров
      </p>
    </header>

    <main class="main">
      <CaseSelector
        :gender="selectedGender"
        :number="selectedNumber"
        :case="selectedCase"
        @update:gender="selectedGender = $event as Gender | ''"
        @update:number="selectedNumber = $event as Quantity | ''"
        @update:case="selectedCase = $event as Case | ''"
      />

      <ResultDisplay
        :gender="selectedGender as Gender"
        :number="selectedNumber as Quantity"
        :case="selectedCase as Case"
      />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CaseSelector from './components/CaseSelector.vue';
import ResultDisplay from './components/ResultDisplay.vue';
import { Gender, Quantity, Case } from './data/cases';

export default defineComponent({
  name: 'App',
  components: {
    CaseSelector,
    ResultDisplay,
  },
  data() {
    return {
      selectedGender: '' as Gender | '',
      selectedNumber: '' as Quantity | '',
      selectedCase: '' as Case | '',
    };
  },
});
</script>

<style scoped>
#app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 0;
  margin: 0;
}

.header {
  background-color: #f0f0f0;
  color: #222;
  padding: 40px 20px;
  text-align: center;
  border-bottom: 4px solid #cccccc;
}

.header h1 {
  margin: 0 0 10px 0;
  font-size: 36px;
  font-weight: 700;
}

.subtitle {
  margin: 0;
  font-size: 16px;
  color: #444;
}

.main {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>
