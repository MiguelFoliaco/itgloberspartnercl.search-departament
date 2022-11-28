import React, { useEffect, useState } from 'react'
import { useQuery } from "react-apollo";
import { useDevice } from 'vtex.device-detector';
import { SearchBar } from 'vtex.store-components';
import QUERY_VALUE from "../graphql/getDepartamentsGroup.graphql";
import { ICategory } from '../interfaces/ICategory';
import { DepartmentGroup } from './DepartmentGroup';
import '../styles/index.css';
import DepartmentGroupSearchBar from './DepartmentGroupSearchBar';

const DepartamentSearch = () => {

  const { data, loading } = useQuery<{ categories: ICategory[] }>(QUERY_VALUE);
  const [categorys, setCategorys] = useState<ICategory[]>([])
  const [slugSelected, setSlugSelected] = useState("");
  const [slugQuery, setSlugQuery] = useState("");
  const { isMobile } = useDevice();

  useEffect(() => {
    if (data !== undefined) {
      setCategorys(data.categories);
    }
  }, [data])

  useEffect(() => {

    if (slugSelected !== '') {
      setSlugQuery(`${slugSelected}/$\{term\}&map=ft`)
      console.log(`${slugSelected}/$\{term\}&map=ft`)
    }
  }, [slugSelected])

  console.log(isMobile, slugQuery)

  return (
    <>
      {
        loading ? <p>Loadding...</p>
          :
          <>
            {
              isMobile ?
                <DepartmentGroup categorys={categorys} />
                :
                <>

                  <DepartmentGroupSearchBar categories={categorys} setSlugSelected={setSlugSelected} slugSelected={slugSelected} />
                  <SearchBar
                    customSearchPageUrl={slugQuery}
                    placeholder="¿Que buscas en linio?"
                  />
                </>
            }
          </>
      }
    </>
  )
}

export { DepartamentSearch }
