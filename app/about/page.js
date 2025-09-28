import Image from 'next/image'

export const metadata = {
  title: 'About - Durgesh',
}

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        {/* image is placed in public/imgs/ and referenced by its filename */}
        <Image
          src="/imgs/circle-texture.svg"
          alt="Decorative circular texture"
          width={600}
          height={600}
          className="about__image"
          priority
        />
      </div>
    </section>
  )
}
