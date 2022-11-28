import React, { Dispatch, SetStateAction } from 'react'
import { ICategory } from '../interfaces/ICategory'
import { getID } from '../utils/ID'
type props = {
  categories: ICategory[];
  setSlugSelected: Dispatch<SetStateAction<string>>;
  slugSelected: string;
}

const DepartmentGroupSearchBar = ({ categories, setSlugSelected }: props) => {

  const handleSelectedSlug = (e: any) => {
    setSlugSelected(e.target.value);
  }

  return (
    <div>

      <select name="" id=""
        onChange={handleSelectedSlug}
        defaultValue='0'
      >
        <option value='0'>Seleccione una opcion</option>
        {
          categories.map(e => (
            <option value={e.slug} key={getID(3)}>{e.slug}</option>
          ))
        }
      </select>

    </div>
  )
}

export default DepartmentGroupSearchBar
