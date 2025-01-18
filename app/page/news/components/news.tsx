"use client";
import { useState } from "react";
import { useGetNews } from "@/api/useGetNews";
import { ResponseType } from "@/types/response";
import { NewType } from "@/types/news";

const BASE_URL = "http://localhost:1337"; // Cambia esto según tu entorno

const News = () => {
  const { loading, result }: ResponseType = useGetNews();
  const [selectedNews, setSelectedNews] = useState<NewType | null>(null);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-xl font-semibold text-gray-700">Cargando...</p>
      </div>
    );
  }

  if (!result || result.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl font-semibold text-gray-700">No hay noticias disponibles.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 tracking-tight">
          Noticias Financieras Más Recientes
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Listado de noticias */}
          <div className="flex-1">
            {result.map((newsItem: NewType) => (
              <div
                key={newsItem.id}
                className={`border border-gray-200 rounded-xl shadow-lg bg-white mb-6 transition-all duration-300 ${
                  selectedNews?.id === newsItem.id
                    ? "bg-blue-100 ring-2 ring-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <button
                  className="w-full px-6 py-4 font-semibold text-left text-gray-800 hover:text-gray-600 transition-colors duration-300"
                  onClick={() => setSelectedNews(newsItem)}
                >
                  <h2 className="text-xl font-semibold">{newsItem.title}</h2>
                </button>
              </div>
            ))}
          </div>

          {/* Previsualización persistente */}
          <div
            className={`flex-1 ${
              selectedNews ? "opacity-100" : "opacity-50 pointer-events-none"
            } transition-opacity duration-300`}
          >
            {selectedNews ? (
              <div className="p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedNews.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Autor:</strong> {selectedNews.author} | <strong>Publicado:</strong>{" "}
                  {new Date(selectedNews.published_date).toLocaleDateString()}
                </p>
                <div className="text-gray-700 mb-6">
                  {selectedNews.content.slice(0, 2).map((block, index) => (
                    <p key={index} className="leading-relaxed text-justify">
                      {block.children.map((child) => child.text).join("")}
                    </p>
                  ))}
                </div>
                {selectedNews.featured_image?.formats?.medium?.url && (
                  <img
                    src={`${BASE_URL}${selectedNews.featured_image.formats.medium.url}`}
                    alt={selectedNews.featured_image.alternativeText || selectedNews.title}
                    className="w-full max-w-lg mx-auto rounded-lg shadow-md"
                  />
                )}
                <a
                  href={selectedNews.external_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-blue-600 hover:underline hover:text-blue-700 transition duration-300"
                >
                  Leer el artículo completo →
                </a>
              </div>
            ) : (
              <div className="p-8 bg-white rounded-xl shadow-lg text-center">
                <p className="text-gray-600">Selecciona una noticia para ver los detalles.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
