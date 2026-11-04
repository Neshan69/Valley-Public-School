import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { AboutPage } from "@/pages/AboutPage";
import { AcademicsPage } from "@/pages/AcademicsPage";
import { AdmissionsPage } from "@/pages/AdmissionsPage";
import { ContactPage } from "@/pages/ContactPage";
import { FacilitiesPage } from "@/pages/FacilitiesPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { HomePage } from "@/pages/HomePage";

export default function App() {
  return <BrowserRouter basename={import.meta.env.BASE_URL}><Routes><Route element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="gallery" element={<GalleryPage />} />
    <Route path="contacts" element={<ContactPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="academics" element={<AcademicsPage />} />
    <Route path="facilities" element={<FacilitiesPage />} />
    <Route path="admissions" element={<AdmissionsPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route></Routes></BrowserRouter>;
}
