<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-8">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> NgopiApp </q-toolbar-title>

        <div>
          <q-avatar>
            <img
              src="https://i0.wp.com/esportsnesia.com/wp-content/uploads/2022/10/Hatsune-Miku.-Cover.jpg"
            />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          :to="link.to"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "dashboard",
    to: "dashboardAdmin",
  },
  {
    title: "Data Kopi",
    icon: "coffee",
    to: "dataKopiAdmin",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
