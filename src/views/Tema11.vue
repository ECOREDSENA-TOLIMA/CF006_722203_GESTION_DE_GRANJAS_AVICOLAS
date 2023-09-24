<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Ingreso de personas a granja y áreas

    p.mb-5 El ingreso de personas a granjas avícolas es uno de los mecanismos de bioseguridad que controlan el estricto ingreso del personal a las unidades productivas el cual debe ser autorizado por el propietario o el encargado de la unidad productiva. 

    Separador
    #t_11_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 11.1 Importancia

    p.mb-5 El ingreso de personal a las instalaciones de la granja es de vital importancia en una granja avícola, porque se ejerce control del personal o personas visitantes, las cuales deben cumplir con los protocolos de bioseguridad y de esta forma reducir la posibilidad del ingreso de agentes patógenos a la explotación avícola.

    Separador
    #t_11_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 11.2 Protocolo 

    p.mb-5 El protocolo de ingreso de las personas a la granja avícola es un documento diseñado por el personal especializado en la empresa avícola y debe ser conocido por sus trabajadores e informado a los visitantes, los cuales deben cumplir con las siguientes pautas: 

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | No haber ingresado a otras granjas avícolas en las últimas 48 horas.
      li 
        i.lista-ul__vineta
        | Ingresar a las instalaciones por las áreas de acceso establecidas por la organización.
      li  
        i.lista-ul__vineta
        | Ingresar a la batería sanitaria teniendo en cuenta el flujo unidireccional (área sucia - área intermedia - área limpia) dejando su ropa de calle en el lugar dispuesto para tal fin dentro de la batería sanitaria.
      li 
        i.lista-ul__vineta
        | Ingresar a la ducha para realizar el proceso de aseo e higiene personal, donde tendrá a su disposición de jabón antibacterial y toallas.
      li  
        i.lista-ul__vineta
        | Vestir la dotación suministrada por la granja (vestido y calzado).
      li 
        i.lista-ul__vineta
        | Los objetos personales que requieran ingresar deben ser desinfectados en la cámara de desinfección. 
      
    p.mb-5 Según Anzola (2008) es importante incluir en los protocolos de visitantes y personal la siguiente información:

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | El procedimiento que se hará debidamente documentado dentro del programa de limpieza y desinfección.
      li 
        i.lista-ul__vineta
        | Las indicaciones y recomendaciones de limpieza y desinfección del personal (objetos de carácter personal).
      li  
        i.lista-ul__vineta
        | Las zonas de ingreso deben contar con filtros sanitarios, tales como: lavas botas, pocetas de desinfección y desinfectante para las manos.
      li 
        i.lista-ul__vineta
        | Las personas deben ducharse y cambiarse de ropa.
      li  
        i.lista-ul__vineta
        | Los visitantes que ingresan deben evitar contacto con otras aves en un tiempo mínimo de 72 horas y los recorridos se harán desde el área limpia hasta el área sucia.
      li 
        i.lista-ul__vineta
        | Se hará desinfección de las máquinas y equipos antes de ingresar.
      li  
        i.lista-ul__vineta
        | Se deberá usar al ingreso de vehículos, arcos y sistemas de desinfección.
      li 
        i.lista-ul__vineta
        | Se usarán sistemas de drenaje para evitar contaminación, por lo que se hará tratamiento y mantenimiento de las superficies de vías de acceso, el patio de maniobras, la zona de cargue y descargue.  







</template>

<script>
export default {
  name: 'Tema11',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
