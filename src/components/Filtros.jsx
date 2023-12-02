import {useEffect, useState} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
      <div className='filtros sombra contenedor'>
          <form action="">
              <div className="campo">
                  <label htmlFor="">
                      filtrar Gastos
                  </label>
                  <select name=""

                      value={filtro}
                      onChange={ e => setFiltro(e.target.value)}
                  
                  >
                      
                      <option value="">-- Todas las categorias --</option>
                      <option value="Ahorro">Ahorro</option>
                      <option value="comida">Comida</option>
                      <option value="casa">Casa</option>
                      <option value="gastos">Gastos Varios</option>
                      <option value="ocio">Ocio</option>
                      <option value="salud">Salud</option>
                      <option value="suscripcioens">Suscripciones</option>
                  </select>
              </div>
          </form>
      </div>
  )
}

export default Filtros