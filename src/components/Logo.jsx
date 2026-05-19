import logoBranco from '../../img/logotipo_verus_transportes_branco.png'

function Logo() {
  return (
    <a href="#inicio" className="flex w-[136px] items-center overflow-hidden sm:w-[150px]" aria-label="Verus Transportes">
      <img
        src={logoBranco}
        alt="Verus Transportes"
        className="h-9 w-full object-contain object-left sm:h-10"
      />
    </a>
  )
}

export default Logo
