export const featureLists: FeatureType[] = [
  { id: 1001, label: "Dashboard", value: "dashboard", icon: "pi-th-large" },
  {
    id: 1002,
    label: "Akademik",
    value: "academic",
    icon: "pi-graduation-cap",
    subItems: [
      { id: 10021, label: "Kurikulum", value: "curriculum" },
      { id: 10022, label: "Kalender Akademik", value: "calendar" },
      { id: 10023, label: "Rencana Studi", value: "study-plan" },
      { id: 10023, label: "Kegiatan Perkuliahan", value: "lecturing-activity" },
      { id: 10023, label: "Capaian Studi", value: "kks" },
      { id: 10023, label: "Tugas Akhir", value: "thesis" },
      { id: 10023, label: "Kelulusan", value: "graduation" },
      { id: 10023, label: "Pendaftaran SMUP", value: "registration" },
    ],
  },
  {
    id: 1003,
    label: "Non-Akademik",
    value: "non-academic",
    icon: "pi-book",
    subItems: [
      { id: 10031, label: "Catatan Prestasi", value: "catatan-prestasi" },
    ],
  },
  {
    id: 1004,
    label: "Administrasi",
    value: "administration",
    icon: "pi-desktop",
    subItems: [
      { id: 10041, label: "Informasi Tagihan", value: "billinformation" },
      { id: 10042, label: "Status Her-Registrasi", value: "her-register" },
      { id: 10043, label: "Beasiswa", value: "scholarship" },
    ],
  },
  { id: 1005, label: "Layanan", value: "service", icon: "pi-globe" },
];

export interface FeatureType {
  label: string;
  value: string;
  icon?: string;
  id: number;
  subItems?: { icon?: string; label: string; value: string; id: number }[];
}
