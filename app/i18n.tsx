import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources: any = {
  en: {
    translation: {
      login: {
        title: "Test E-Commerce",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum magni at eveniet fuga veniam iste molestiae ex soluta odit iure eos itaque, tenetur tempora quam maxime dicta quisquam reiciendis.",
        signup: {
          title: "Sign Up",
          description:
            "This is the Sign up Tab for the user to create an account.",
          username: "Username",
          phone: "Phone Number",
          password: "Password",
        },
        login: {
          title: "Login",
          description:
            "This is the login page for the user to login to their account.",
          username: "Username",
          password: "Password",
        },
      },
      sidebar: {
        jobTitle: "admin",
        teams: "teams",
        addingTeam: "add team",
        accountSection: {
          username: "Username",
          gmail: "Gmail",
        },
        adminSection: {
          title: "Admin",
          products: "Products",
          orders: "Orders",
        },
      },
    },
  },
  ar: {
    translation: {
      login: {
        title: "متجر الكتروني تجريبي",
        description:
          "هنا مجرد كلام فقط لزيادة الحشو من اجل العرض لا اقل ولا اكثر",
        signup: {
          title: "إنشاء حساب",
          description: "هنا يمكن للمستخدم انشاء حساب جديد وهذا فقط لغرض الرؤية",
          username: "اسم المستخدم",
          phone: "رقم الهاتف",
          password: "كلمة المرور",
        },
        login: {
          title: "تسجيل الدخول",
          description:
            "هذه هي صفحة تسجيل الدخول للمستخدم لتسجيل الدخول إلى حسابه.",
          username: "اسم المستخدم",
          password: "كلمة المرور",
        },
      },
      sidebar: {
        jobTitle: "مدير",
        teams: "الفرق",
        addingTeam: "إضافة فريق",
        accountSection: {
          username: "اسم المستخدم",
          gmail: "البريد الالكتروني",
        },
        adminSection: {
          title: "المدير",
          products: "المنتجات",
          orders: "الطلبات",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
