import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
<script src="https://plausible.io/js/plausible.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="hi!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
