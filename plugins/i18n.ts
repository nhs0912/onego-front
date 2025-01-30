import {createI18n} from 'vue-i18n';
export default defineNuxtPlugin(({vueApp})=> {
const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      'en': {
        home: 'Home',
        about: 'About',
        youtube: 'Youtube',
        admin: 'Admin',
        custom: 'Custom',
        course: 'Course',
        login: 'Login',
        logout: 'Logout',
        hello: 'Hello',
        email: 'email',
        password: 'password',
      },
      'ko': {
        home: '홈',
        about: '어바웃',
        youtube: '유튜브',
        admin: '관리자',
        custom: '커스텀',
        course: '코스',
        login: '로그인',
        logout: '로그아웃',
        hello: '안녕하세요',
        email: '이메일',
        password: "비밀번호",
      },
    },
  });
  vueApp.use(i18n);
});
