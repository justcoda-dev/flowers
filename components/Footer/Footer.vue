<template>
  <footer class="footer">
    <div class="contacts wrapper">
      <Title class="contacts__title title" type="h5" text="Контакти"/>
      <div class="contacts__list">
        <a href="tel:+380988661614" class="contacts__phone"><b>Телефон:</b>+380988661614</a>
        <a href="mailto:justcoda@gmail.com" class="contacts__mail"><b>e-mail:</b>
          justcoda@gmail.com</a>
      </div>
    </div>
    <nav class="navigation wrapper">
      <Title class="navigation__title title" type="h5" text="Меню"/>
      <div class="navigation__list">
        <NuxtLink to="/">Головна сторінка</NuxtLink>
        <NuxtLink to="/flower-pots">Вазони</NuxtLink>
        <NuxtLink to="/contacts">Контакти</NuxtLink>
      </div>
    </nav>
    <div class="social wrapper">
      <Title class="social__title title" type="h5" text="Підписуйся"/>
      <div class="social__list">
        <SocialLink class="social__link" v-for="social of socialList" :key="social.id"
                    :social="social"/>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLink from "~/components/Social/SocialLink";
import Title from "~/components/UI/Title";

export default {
  name: "Footer",
  components: {Title, SocialLink},
  props: {
    socialList: {
      type: Array,
      require: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

.wrapper {
  padding: 20px 0;
  @media screen and (max-width: $mediaSWidth) {
padding: 20px 50px;
  }
}

.footer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px 0;

  .title {
    text-align: center;
    color: black;
  }

  .contacts {
    &__list {
      display: flex;
      flex-direction: column;

      a {
        font-size: 1.2rem;
        margin: 5px 0;
      }
    }

    &__phone {
      position: relative;
      color: #3f4960;
    }

    &__mail {
      color: #3f4960;
    }
  }

  .social {
    display: flex;
    flex-direction: column;


    &__list {
      margin: auto;
    }
  }

  .navigation {
    &__list {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
      margin: 5px 0;
      text-align: center;
      a {
        color: #3f4960;
      }
    }
  }
}
</style>
