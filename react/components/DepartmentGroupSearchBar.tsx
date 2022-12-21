import React, { Dispatch, SetStateAction } from 'react'
import { ICategory } from '../interfaces/ICategory'
import { getID } from '../utils/ID'
type props = {
  categories: ICategory[];
  setSlugSelected: Dispatch<SetStateAction<string>>;
  slugSelected: string;
  blockClass: string;
}

const DepartmentGroupSearchBar = ({ categories, setSlugSelected, slugSelected, blockClass }: props) => {

  const handleSelectedSlug = (e: any) => {
    setSlugSelected(e.target.value);
  }

  return (
    <div className={blockClass}>
      <select
        onChange={handleSelectedSlug}
        defaultValue={slugSelected}
      >
        <option value='0'>Seleccione una opcion</option>
        {
          categories.map(e => (
            <option value={e.slug} key={getID(3)} selected={slugSelected === e.slug}>{e.slug}</option>
          ))
        }
      </select>

    </div>
  )
}

export default DepartmentGroupSearchBar
