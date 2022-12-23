<template>
  <form class="form" @submit.prevent="">
    <InputText
      :placeholder="'Ім\'я та Прізвище'"
      @change="onNameChange"
    />
    <InputPhone
      :placeholder="'Телефон у форматі 380'"
      @change="onPhoneInputChange"
    />
    <AutocompleteSelect
      @selectItem="onSelectCity"
      v-model="userData.city"
      :list="citiesList" @input="onCityInput"
      :placeholder="'Місто'"
    />
    <AutocompleteSelect
      @selectItem="onSelectDepartment"
      :list="departmentsList"
      v-model="userData.department"
      :placeholder="'Оберіть відділення'"
      @input="onInputDepartment"
    />
    <ButtonConfirm :disabled="disabled" @click="onSubmit(userData)">Підтвердити</ButtonConfirm>
    <!--    <AutocompleteSelect :placeholder="'Відділення'"/>-->
  </form>
</template>

<script>
import AutocompleteSelect from "~/components/UI/AutocompleteSelect";
import ButtonConfirm from "~/components/UI/ButtonConfirm";
import InputPhone from "~/components/UI/InputPhone";
import InputText from "~/components/UI/InputText";
import SelectCustom from "~/components/UI/SelectCustom";

export default {
  name: "Form",
  components: {InputPhone, SelectCustom, ButtonConfirm, AutocompleteSelect, InputText},
  props: {
    cartIsNotEmpty: {
      type: Boolean,
      require: true
    },
    loading: {
      type: Boolean,
      require: true
    }
  },
  data: () => {
    return {
      citiesList: [],
      departmentsList: [],
      department: "",
      city: "",
      timeoutId: "",
      userData: {
        city: "",
        department: "",
        name: "",
        phoneNumber: "",
      },
      disabled: true
    }
  },
  watch: {
    loading(val) {
      this.disabled = val
    },
    userData: {
      handler({city, department, name, phoneNumber}) {
        if (city && department && name && phoneNumber && this.cartIsNotEmpty) {
          this.disabled = false
        } else {
          this.disabled = true
        }
      },
      deep: true
    }
  },
  methods: {
    onPhoneInputChange(phone) {
      this.userData.phoneNumber = phone
    },
    onNameChange(name) {
      this.userData.name = name
    },
    onCityInput(value) {
      if (this.timeoutId) clearTimeout(this.timeoutId)
      this.timeoutId = setTimeout(async () => {
        try {
          const {data: citiesList} = await this.$axios.$post("https://api.novaposhta.ua/v2.0/json/", {
            "apiKey": "e1bdf2201442e5ad48b631a899c19633",
            "modelName": "Address",
            "calledMethod": "getSettlements",
            "methodProperties": {
              "Page": "1",
              "Warehouse": "1",
              "FindByString": `${value}`,
              "Limit": "20"
            }
          })
          this.citiesList = citiesList.map(({
                                              AreaDescription,
                                              RegionsDescription,
                                              Description,
                                              Ref
                                            }, index) => {
            return {
              id: index,
              Ref,
              option: `${AreaDescription}, ${RegionsDescription}${RegionsDescription && `,`} ${Description}`
            }
          })
        } catch (e) {
          console.error(e)
        }
      }, 300)
    },
    async onSelectCity(city) {
      this.city = city.Ref
      this.userData.city = city.option
      try {
        const {data: departmentsList} = await this.$axios.$post("https://api.novaposhta.ua/v2.0/json/", {
          "apiKey": "e1bdf2201442e5ad48b631a899c19633",
          "modelName": "Address",
          "calledMethod": "getWarehouses",
          "methodProperties": {
            "SettlementRef": `${city.Ref}`,
            "Page": "1",
            "Language": "UA",
          }
        })

        const list = departmentsList.map(({CityDescription, Description}, index) => {
          return {id: index, option: `${CityDescription}, ${Description}`}
        })
        this.departmentsList = list
      } catch (e) {
        console.error(e)
      }
    },
    async onInputDepartment(searchText) {
      try {
        const {data: departmentsList} = await this.$axios.$post("https://api.novaposhta.ua/v2.0/json/", {
          "apiKey": "e1bdf2201442e5ad48b631a899c19633",
          "modelName": "Address",
          "calledMethod": "getWarehouses",
          "methodProperties": {
            "SettlementRef": `${this.city}`,
            "FindByString": `${searchText}`,
            "Page": "1",
            "Language": "UA",
          }
        })
        const list = departmentsList.map(({CityDescription, Description}, index) => {
          return {id: index, option: `${CityDescription}, ${Description}`}
        })
        this.departmentsList = list
      } catch (e) {
        console.error(e)
      }
    },
    onSelectDepartment(department) {
      this.department = department.Ref
      this.userData.department = department.option
    },
    onSubmit(selectedData) {
      this.$emit("click", selectedData)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  & > * {
    margin: 10px 0;
  }
}
</style>
