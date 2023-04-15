<template>
  <q-page padding>
    {{ nama }}
    <q-input v-model="nama" label="Masukkan Nama"></q-input>
    <q-btn @click="($event) => submitForm()">Submit</q-btn>
    <q-btn :to="{ name: 'formInput' }">Form Input</q-btn>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      nama: null,
    };
  },
  methods: {
    submitForm() {
      alert("Submitted");
    },
  },
};
</script>
