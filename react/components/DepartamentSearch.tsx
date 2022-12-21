import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from "vtex.device-detector"
import { SearchBar } from 'vtex.store-components';
import { useQuery } from "react-apollo";
import QUERY_VALUE from "../graphql/getDepartamentsGroup.graphql";
import { ICategory } from '../interfaces/ICategory';
import '../styles/index.css';
import DepartmentGroupSearchBar from './DepartmentGroupSearchBar';

const DepartamentSearch = () => {

  const { data, loading } = useQuery<{ categories: ICategory[] }>(QUERY_VALUE);
  const [categorys, setCategorys] = useState<ICategory[]>([])
  const [slugSelected, setSlugSelected] = useState("");
  const [slugQuery, setSlugQuery] = useState("");
  const { device } = useDevice()
  const CSS_HANDLES = ['search_content', `search_content_${device}`, 'input', 'select', `select_${device}`]
  const classNames = useCssHandles(CSS_HANDLES)

  useEffect(() => {
    if (data !== undefined) {
      setCategorys(data.categories);
    }
  }, [data])

  useEffect(() => {

    if (slugSelected !== '') {
      setSlugQuery(`${slugSelected}/$\{term\}`)
    }
  }, [slugSelected])

  return (
    <>
      {
        loading ? <p>Loadding...</p>
          :
          <div className={`${classNames.search_content} ${classNames[`search_content_${device}`]} `}>
            <DepartmentGroupSearchBar blockClass={`${classNames.select} ${classNames[`select_${device}`]}`} categories={categorys} setSlugSelected={setSlugSelected} slugSelected={slugSelected} />
            <SearchBar
              customSearchPageUrl={slugQuery}
              placeholder="¿Que buscas en linio?"

            />
          </div>
      }
    </>
  )
}

export { DepartamentSearch }
