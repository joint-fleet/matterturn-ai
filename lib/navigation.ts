import {type Locale} from "@/lib/i18n";

export type SiteSection = "about" | "team" | "founders" | "mission" | "projects" | "contact";

export const navigation: Record<Locale, Record<"home" | "systems" | SiteSection, string>> = {
  en:{home:"Home",systems:"Professional systems",projects:"Projects",contact:"Contact",about:"About",team:"Team",founders:"Founder",mission:"Our purpose"},
  "zh-CN":{home:"首页",systems:"专业系统",projects:"项目",contact:"联系我们",about:"关于我们",team:"团队",founders:"创始人",mission:"我们的宗旨"},
  "zh-TW":{home:"首頁",systems:"專業系統",projects:"項目",contact:"聯絡我們",about:"關於我們",team:"團隊",founders:"創始人",mission:"我們的宗旨"},
  fr:{home:"Accueil",systems:"Systèmes spécialisés",projects:"Projets",contact:"Contact",about:"À propos",team:"Équipe",founders:"Fondateur",mission:"Notre mission"},
  ar:{home:"الرئيسية",systems:"الأنظمة المتخصصة",projects:"المشاريع",contact:"اتصل بنا",about:"من نحن",team:"الفريق",founders:"المؤسس",mission:"رسالتنا"},
  ary:{home:"الرئيسية",systems:"الأنظمة المتخصصة",projects:"المشاريع",contact:"تواصل معانا",about:"علينا",team:"الفريق",founders:"المؤسس",mission:"الهدف ديالنا"},
  es:{home:"Inicio",systems:"Sistemas especializados",projects:"Proyectos",contact:"Contacto",about:"Nosotros",team:"Equipo",founders:"Fundador",mission:"Nuestro propósito"},
  ja:{home:"ホーム",systems:"専門システム",projects:"プロジェクト",contact:"お問い合わせ",about:"私たちについて",team:"チーム",founders:"創業者",mission:"私たちの理念"},
  th:{home:"หน้าแรก",systems:"ระบบเฉพาะทาง",projects:"โครงการ",contact:"ติดต่อเรา",about:"เกี่ยวกับเรา",team:"ทีม",founders:"ผู้ก่อตั้ง",mission:"จุดมุ่งหมายของเรา"}
};
