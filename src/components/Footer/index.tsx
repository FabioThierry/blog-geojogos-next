import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Main company logo and info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/geojogos.svg"
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto "
                />
                <span className="ml-3 text-xl font-bold text-green-800">
                  GeoJogos
                </span>
              </Link>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Desenvolvimento de jogos educacionais geográficos.
            </p>
          </div>

          {/* Partner/Minor company logos */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Nosso Parceiro
            </h3>

            <Link
              href="https://gemacufcg.blogspot.com/"
              target="_blank"
              className="flex items-center space-x-4"
            >
              <Image
                src="/gemac.svg"
                alt="Gemac Logo"
                width={30}
                height={10}
                className="h-12 w-auto border border-gray-200 rounded-sm"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Gemac</p>
                <p className="text-xs text-gray-500">
                  Grupo de estudos e pesquisas sobre Ensino Meio Ambiente e
                  Cidade
                </p>
              </div>
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Conectar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Pólitica de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center inline-block">
            © {new Date().getFullYear()} Desenvolvido por GeoJogos |{" "}
          </p>
          <Link
            href="https://fabio.geojogos.com.br"
            className="hover:underline hover:text-green-600 xl:text-center text-base text-gray-400 "
          >
            {" "}
            Fábio Thierry.
          </Link>
        </div>
      </div>
    </footer>
  );
}
