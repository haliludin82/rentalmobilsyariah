'use client'

import { useState } from 'react'
import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { 
  Car, 
  MapPin, 
  Clock, 
  Shield, 
  DollarSign, 
  Users, 
  Star,
  Phone,
  Instagram,
  CheckCircle,
  HeadphonesIcon,
  Plane,
  Calendar,
  UserCheck,
  Award,
  Navigation
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('harian')

  const whatsappNumber = "6281584294008"
  const whatsappMessage = "Halo, saya tertarik untuk rental mobil di Rental Mobil Syariah"

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  const handleLihatArmadaClick = () => {
    const armadaSection = document.getElementById('armada-section')
    if (armadaSection) {
      armadaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const armada = [
    {
      name: "Avanza",
      category: "MPV",
      capacity: "7 Penumpang",
      dailyPrice: 350000,
      weeklyPrice: 2100000,
      monthlyPrice: 7500000,
      features: ["AC Dingin", "Audio System", "USB Port", "Bagasi Luas"],
      image: "🚗"
    },
    {
      name: "Xenia",
      category: "MPV", 
      capacity: "7 Penumpang",
      dailyPrice: 350000,
      weeklyPrice: 2100000,
      monthlyPrice: 7500000,
      features: ["AC Dingin", "Audio System", "USB Port", "Bagasi Luas"],
      image: "🚙"
    },
    {
      name: "Mobilio",
      category: "MPV",
      capacity: "7 Penumpang", 
      dailyPrice: 350000,
      weeklyPrice: 2100000,
      monthlyPrice: 7500000,
      features: ["AC Dingin", "Audio System", "USB Port", "Irit BBM"],
      image: "🚐"
    },
    {
      name: "Innova Reborn",
      category: "Premium MPV",
      capacity: "7 Penumpang",
      dailyPrice: 650000,
      weeklyPrice: 3900000,
      monthlyPrice: 13500000,
      features: ["AC Double Blower", "Leather Seat", "Audio Premium", "Safety Features"],
      image: "🚘"
    },
    {
      name: "Hiace",
      category: "Commuter",
      capacity: "15 Penumpang",
      dailyPrice: 1200000,
      weeklyPrice: 7200000,
      monthlyPrice: 24000000,
      features: ["AC Double Blower", "Audio System", "Bagasi Luas", "Comfortable Seating"],
      image: "🚍"
    }
  ]

  const keunggulan = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Unit Selalu Bersih & Terawat",
      description: "Mobil selalu dalam kondisi prima, bersih, dan terawat secara berkala"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Harga Terjangkau & Transparan",
      description: "Harga kompetitif tanpa biaya tersembunyi, sesuai budget Anda"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Proses Cepat Tanpa Ribet",
      description: "Proses pemesanan mudah dan cepat, tidak perlu persyaratan rumit"
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Banyak Pilihan Jenis Mobil",
      description: "Berbagai tipe mobil sesuai kebutuhan, dari ekonomis hingga premium"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Driver Berpengalaman & Ramah",
      description: "Sopir profesional yang berpengalaman dan mengutamakan keselamatan"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Pelayanan Terpercaya",
      description: "Reputasi baik dan testimonial positif dari pelanggan setia"
    }
  ]

  const layanan = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Lepas Kunci",
      description: "Sewa mobil tanpa driver untuk fleksibilitas maksimal"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dengan Driver",
      description: "Sewa mobil dengan driver profesional untuk kenyamanan"
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Antar-Jemput Bandara",
      description: "Layanan antar jemput dari dan ke bandara"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Sewa Harian",
      description: "Sewa mobil per hari untuk kebutuhan jangka pendek"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Sewa Bulanan",
      description: "Harga spesial untuk sewa mobil jangka panjang"
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Perjalanan Dinas & Keluarga",
      description: "Layanan khusus untuk dinas atau liburan keluarga"
    }
  ]

  const testimonials = [
    {
      name: "Budi Santoso",
      rating: 5,
      comment: "Pelayanan sangat memuaskan! Mobil bersih, driver ramah, dan harga terjangkau. Recommended!",
      date: "2 minggu yang lalu"
    },
    {
      name: "Siti Nurhaliza",
      rating: 5,
      comment: "Sewa mobil untuk liburan keluarga. Prosesnya mudah dan cepat. Mobilnya nyaman dan terawat.",
      date: "1 bulan yang lalu"
    },
    {
      name: "Ahmad Fauzi",
      rating: 5,
      comment: "Driver sangat berpengalaman dan mengenal rute Bekasi. Tepat waktu dan pelayanan profesional.",
      date: "1 bulan yang lalu"
    },
    {
      name: "Diana Putri",
      rating: 5,
      comment: "Harga paling murah di Bekasi dengan kualitas mobil yang bagus. Sudah langganan 3 bulan ini.",
      date: "2 bulan yang lalu"
    }
  ]

  const faqs = [
    {
      question: "Apa saja syarat untuk lepas kunci?",
      answer: "Syarat lepas kunci: KTP (wajib), SIM A, KK, dan 1 dokumen pendukung (PASPOR/BPJS/KARTU KREDIT/NPWP). Untuk mahasiswa tambahkan surat keterangan kuliah."
    },
    {
      question: "Berapa jam operasional Rental Mobil Syariah?",
      answer: "Kami buka setiap hari dari jam 06:00 - 22:00 WIB. Untuk booking darurat bisa menghubungi kami 24 jam."
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer: "Pembayaran bisa dilakukan dengan transfer bank, e-wallet (OVO, GoPay, Dana), atau tunai saat mobil diserahkan. DP minimal 30% untuk konfirmasi booking."
    },
    {
      question: "Apakah bisa last minute booking?",
      answer: "Bisa, tergantung ketersediaan unit. Kami sarankan booking 1-2 hari sebelumnya untuk memastikan unit tersedia, terutama untuk weekend dan hari libur."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Head>
        <title>Rental Mobil Bekasi - Murah, Amanah, Unit Terawat | Rental Mobil Syariah</title>
        <meta name="description" content="Rental mobil Bekasi termurah dengan unit terawat. Sewa Avanza, Xenia, Innova, Hiace. Lepas kunci & dengan driver. Harga mulai 350rb/hari. Booking sekarang!" />
        <meta name="keywords" content="rental mobil bekasi, sewa mobil bekasi, rental mobil lepas kunci bekasi, sewa mobil harian bekasi, rental mobil bulanan bekasi" />
        <meta property="og:title" content="Rental Mobil Bekasi - Murah, Amanah, Unit Terawat" />
        <meta property="og:description" content="Rental mobil Bekasi termurah dengan unit terawat. Banyak pilihan mobil, bisa lepas kunci & dengan driver." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Rental Mobil Syariah",
            "description": "Rental mobil Bekasi termurah dengan unit terawat. Sewa Avanza, Xenia, Innova, Hiace. Lepas kunci & dengan driver.",
            "url": "https://rentalmobilsyariah.com",
            "telephone": "+6281584294008",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bekasi",
              "addressRegion": "Jawa Barat",
              "addressCountry": "ID"
            },
            "openingHours": "Mo-Su 06:00-22:00",
            "priceRange": "$"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 w-fit">
                🚗 Rental Mobil Terpercaya di Bekasi
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Rental Mobil Bekasi – Murah, Amanah, Unit Terawat!
              </h1>
              <p className="text-xl text-blue-100">
                Sewa mobil harian/mingguan/bulanan. Banyak pilihan unit. Bisa lepas kunci & dengan driver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8"
                  onClick={handleWhatsAppClick}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Pesan via WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-4 px-8"
                  onClick={handleLihatArmadaClick}
                >
                  Lihat Armada
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Unit Terawat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Harga Terjangkau</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-4xl mb-2">🚗</div>
                <p className="font-semibold">Avanza</p>
                <p className="text-sm text-blue-100">350rb/hari</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-4xl mb-2">🚙</div>
                <p className="font-semibold">Xenia</p>
                <p className="text-sm text-blue-100">350rb/hari</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-4xl mb-2">🚘</div>
                <p className="font-semibold">Innova</p>
                <p className="text-sm text-blue-100">650rb/hari</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-4xl mb-2">🚐</div>
                <p className="font-semibold">Mobilio</p>
                <p className="text-sm text-blue-100">350rb/hari</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Rental Mobil Syariah?
            </h2>
            <p className="text-xl text-gray-600">
              Kami berkomitmen memberikan pelayanan terbaik untuk kebutuhan transportasi Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keunggulan.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daftar Armada & Harga Section */}
      <section id="armada-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Daftar Armada & Harga
            </h2>
            <p className="text-xl text-gray-600">
              Pilih mobil sesuai kebutuhan dan budget Anda
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="harian">Harian</TabsTrigger>
                <TabsTrigger value="mingguan">Mingguan</TabsTrigger>
                <TabsTrigger value="bulanan">Bulanan</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {armada.map((mobil, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">{mobil.name}</CardTitle>
                      <CardDescription className="text-gray-600">{mobil.category}</CardDescription>
                    </div>
                    <div className="text-4xl">{mobil.image}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{mobil.capacity}</span>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Harga {activeTab}</p>
                      <p className="text-2xl font-bold text-blue-900">
                        {activeTab === 'harian' && `Rp ${mobil.dailyPrice.toLocaleString('id-ID')}`}
                        {activeTab === 'mingguan' && `Rp ${mobil.weeklyPrice.toLocaleString('id-ID')}`}
                        {activeTab === 'bulanan' && `Rp ${mobil.monthlyPrice.toLocaleString('id-ID')}`}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Fitur:</p>
                    <div className="flex flex-wrap gap-2">
                      {mobil.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                    onClick={handleWhatsAppClick}
                  >
                    Booking Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Tersedia
            </h2>
            <p className="text-xl text-gray-600">
              Berbagai layanan untuk memenuhi kebutuhan transportasi Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layanan.map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimoni Pelanggan
            </h2>
            <p className="text-xl text-gray-600">
              Apa kata pelanggan setia kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <Separator className="mb-4" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan Umum (FAQ)
            </h2>
            <p className="text-xl text-gray-600">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Lokasi Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lokasi & Area Layanan
            </h2>
            <p className="text-xl text-gray-600">
              Melayani seluruh wilayah Bekasi dan sekitarnya
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Area Layanan Kami</h3>
                  <p className="text-gray-600">
                    Bekasi – Melayani Jati Asih, Galaxy, Pekayon, Rawalumbu, Harapan Indah, Tambun, dan sekitarnya.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Jam Operasional</h3>
                  <p className="text-gray-600">
                    Setiap hari: 06:00 - 22:00 WIB<br />
                    Hotline darurat: 24 jam
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hubungi Kami</h3>
                  <p className="text-gray-600">
                    WhatsApp: +62 815-8429-4008<br />
                    Instagram: @rentalmobilsyariah
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600">
                Peta lokasi kami akan segera tersedia
              </p>
              <Button 
                className="mt-4 bg-blue-600 hover:bg-blue-700"
                onClick={handleWhatsAppClick}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Dapatkan Petunjuk Arah
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Rental Mobil Syariah</h3>
              <p className="text-gray-400">
                Rental mobil Bekasi terpercaya dengan harga terjangkau dan unit terawat.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sewa Mobil Harian</li>
                <li>Sewa Mobil Mingguan</li>
                <li>Sewa Mobil Bulanan</li>
                <li>Lepas Kunci</li>
                <li>Dengan Driver</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  WhatsApp: +62 815-8429-4008
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  Instagram: @rentalmobilsyariah
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Jam: 06:00 - 22:00 WIB
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Area Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Jati Asih</li>
                <li>Galaxy</li>
                <li>Pekayon</li>
                <li>Rawalumbu</li>
                <li>Harapan Indah</li>
                <li>Tambun</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Rental Mobil Syariah. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
          onClick={handleWhatsAppClick}
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}