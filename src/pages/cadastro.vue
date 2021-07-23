<template>
  <q-page padding>
    <!-- content -->

    <div class="q-gutter-md text-center" style="max-width: 600px">
      <q-form>
        <q-input outlined v-model="nome" label="Nome" />

        <div class="q-gutter-md text-center" style="max-width: 300px">
          <q-input outlined v-model="cpf" label="CPF" mask="###.###.### - ##" />
          <q-input outlined v-model="rg" label="RG" mask="##.###.### - X" />

        </div>
          <q-input outlined v-model="endereco" label="Endereço"  />

        <q-uploader
          url="http://localhost:4444/upload"
          label="Insira aqui comprovantes de Endereço e foto dos documentos acima"
          multiple
          batch
          style="max-width: 300px"
        />
        <q-input
          filled
          v-model="phone1"
          label="Contato de Referência 1"
          mask="(##) ##### - ####"
          fill-mask
        />

        <!-- drop1 -->

        <q-btn-dropdown color="primary" label="Tipo do contato">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Mãe/Pai</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Cônjuge</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Outros</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-input
          filled
          v-model="phone2"
          label="Contato de Referência 2"
          mask="(##) ##### - ####"
          fill-mask
        />
        <!-- drop2 -->
        <q-btn-dropdown color="primary" label="Tipo do contato">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Mãe/Pai</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Cônjuge</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Outros</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      nome:"",
      cpf: "",
      rg:"",
      endereco:"",
      tel1: "tel1",
      phone1: "",
      phone2: "",
    };
  },

  setup() {
    return {
      onItemClick() {
        console.log("");
      },
    };
  },
};
</script>
