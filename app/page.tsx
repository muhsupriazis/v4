import Blockquote from "@/components/element/blockquote";
import Em from "@/components/element/em";
import H1 from "@/components/element/h1"
import P from "@/components/element/p";
import Strong from "@/components/element/strong";

export default function Home() : JSX.Element {
  return (
    <main className="p-4">
      <H1>Halo👋</H1>
      <P>Selamat datang di website personal saya (Muhammad Supri). </P>
      <P>Saya seorang <Em>freelance web developer</Em> yang kadang juga menjadi android developer, tergantung cuan yang mana. </P>
      <P>Disela waktu saya biasanya membaca buku. Beberapa buku yang telah saya baca, saya <Em>simpan disini!</Em></P>
      <P>Tidak hanya membaca disela waktu saya juga kadang berkontemplasi melihat fenomena yang terjadi disekitar saya. Biasanya hasil dari merenung itu saya tuangkan ditulisan. Namun perlu diingat tulisan saya adalah hasil kontemplasi saya, yang artinya bersifat subjectif.</P>
      <Blockquote>Jangan bodoh dengan menganggap sesuatu yang subjectif itu benar secara absolute.</Blockquote>
      <P>Kalian bebas setuju atau tidak setuju dengan pendapat saya, tidak ada yang salah dengan itu.</P>
      <P>Website ini adalah musium perjalanan hidup saya. Saya akan mendokumentasikan apa yang telah saya pelajari, dapatkan, dan rencanakan kedepanya diwebsite ini. Hal hal yang saya masukan disini adalah sesuatu yang tidak semuanya saya publish dimedia social. </P>
      <P>Untuk kamu, bersikaplah seperti seorang mengunjung dengan tidak menginterfensi dokumentasi dimusium.</P>
      <P><Em>Enjoyyy the game ...</Em></P>
    </main>
  );
}
