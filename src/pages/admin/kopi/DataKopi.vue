<template>
  <q-page padding>
    <q-table
      flat
      bordered
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="nama"
    >
      <template v-slot:top-right>
        <q-btn
          :to="{ name: 'formInputKopiAdmin' }"
          label="Input Data"
          color="primary"
          unelevated
        />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="nama" :props="props">
            {{ props.row.nama }}
          </q-td>
          <q-td key="aksi" :props="props">
            <q-btn label="Edit" color="warning" unelevated icon="edit" />
            <q-btn
              class="q-ml-md"
              label="Delete"
              color="negative"
              unelevated
              icon="delete"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        {
          nama: "Kopi Arabika",
        },
        {
          nama: "Kopi Sumatra",
        },
        {
          nama: "Kopi Vulkanik",
        },
      ],
      columns: [
        { name: "nama", label: "Nama Kopi", field: "nama", align: "left" },
        { name: "aksi", label: "Aksi", field: "aksi", align: "left" },
      ],
    };
  },
};
</script>
