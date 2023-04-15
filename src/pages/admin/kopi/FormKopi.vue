<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Form Input Kopi
        <q-form>
          <q-input v-model="form.nama" label="Nama Kopi"></q-input>
          <q-select
            v-model="form.jenis"
            :options="listJenis"
            label="Jenis Kopi"
          ></q-select>
          <q-input v-model="form.harga" label="Harga Kopi"></q-input>
          <q-input v-model="form.deskripsi" label="Deskripsi Kopi"></q-input>
          <q-file v-model="gambar">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      listJenis: ["Arabika", "Sumatra", "Vulkanik"],
      form: {
        nama: null,
        jenis: null,
        harga: 0,
        deskripsi: null,
      },
      gambar: null,
    };
  },
};
</script>
