<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        
        <q-container>
          
        </q-container>

        <q-toolbar-title>Infinity Semijoias</q-toolbar-title>

        <q-btn round>
          <q-avatar size="42px">
            <img src="../../public/icons/icon.jpg">
          </q-avatar>
        </q-btn>
      </q-toolbar>

      <q-tabs v-model="tabHeader">
        <q-route-tab name="cadastro" label="Cadastro"  to="/cadastro"/>
        <q-route-tab name="produtos" label="Produtos" to="/produtos"/>
        <q-route-tab name="sobre"    label="Sobre"    to="/sobre" />
      </q-tabs>
    </q-header>
    <q-footer reveal elevated>
      <q-toolbar>
        <q-tabs v-model="tabFooter">
        <q-tab name="facebook"  class="Facebook"/>
        <q-tab name="instagram" label="Instagram" />
        <q-tab name="twitter"   label="Twitter" />
      </q-tabs>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  data(){
    return{
      tabHeader:"",
      tabFooter: "",
    }

  }
  
})
</script>
