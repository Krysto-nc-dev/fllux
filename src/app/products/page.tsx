'use client'
import NavBar from '@/components/navbar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { fetchDolibarr } from '@/lib/dolibarr'

export default function Product() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchDolibarr('/products')
        setProducts(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <div>Chargement...</div>
  if (error) return <div>Échec du chargement des produits: {error}</div>

  return (
    <main>
      <NavBar />
      <section>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {products.map((product: any) => (
            <Card
              key={product.id}
              className={clsx('w-[300px] flex flex-col justify-between')}
            >
              <CardHeader>
                <CardTitle className="text-orange">{product.label}</CardTitle>
                <CardDescription>
                  {product.description || 'Pas de description disponible'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{product.price} XPF</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <Link
                  href={`/product/${product.id}`}
                  className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
                >
                  Voir le produit
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
