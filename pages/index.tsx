import "@/styles/globals.css";
import React from "react";
import Header from "@/components/layout/Header";
import Hero from "../components/layout/Hero";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Listings from "@/components/layout/Listings"
import Searchfilter from "@/components/layout/Searchfilter";
import { PropertyProps } from "@/interfaces";
import { useEffect } from "react";



export default function Layout() {
  const [properties, setProperties] = React.useState<PropertyProps[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => { 
      try {
        const response = await fetch('/api/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);


  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-4">
        <Nav />
        <Hero />

        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="main_page-container">
              <Searchfilter/>
              <div className="home_filter-container">
              </div>
          </div>
        </div>
        <Listings properties={properties} loading={loading} error={error}/>
      </main>
      <Footer />
    </div>
  );
}
