import React, { useEffect, useState } from 'react'
import { useCssHandles } from "vtex.css-handles"
import { ICategory } from '../interfaces/ICategory'
import { getID } from '../utils/ID'
import { LeftSvgComponent } from './SvgComponents/LeftArrow'
import { UpArrowSvgComponent } from './SvgComponents/UpArrow'

type prop = {
  categorys: ICategory[]
}
type IMenu = { show: boolean, category: ICategory, i: string }

export const DepartmentGroup = ({ categorys }: prop) => {

  const CSS_HANDLES = ['menu_category_container', 'menu_category_header', 'menu_category_header_svg_left', 'menu_category_body', 'menu_category_body_content', 'menu_category_body_element', 'menu_category_body_svg_up', 'menu_category_body_link']
  const handles = useCssHandles(CSS_HANDLES);
  const [showMenu, setShowMenu] = useState<IMenu[]>([]);

  useEffect(() => {
    setShowMenu(categorys.map((e) => ({ show: false, category: e, i: getID(4) })))
  }, [categorys])

  const handleClickShowMenu = (_e: IMenu) => {
    let menuCategoryTemp = showMenu;
    const menuOne = menuCategoryTemp.filter(e => e.i === _e.i);
    console.log(menuOne)
    //setShowMenu([...showMenu])
  }

  return (
    <div className={handles.menu_category_container}>
      <div className={handles.menu_category_header}>
        <LeftSvgComponent className={handles.menu_category_header_svg_left} />
        <p>Categorias</p>
      </div>
      <div className={handles.menu_category_body}>
        {
          showMenu.map(e => (
            <div className={handles.menu_category_body_content} key={getID(3)}>
              <div className={handles.menu_category_body_element}>

                <span className={`${handles.menu_category_body_link} fl w-90 pa2`}>
                  {e.category.slug}
                </span>
                <div className='fl w-10 pa2' onClick={() => handleClickShowMenu(e)}>
                  {
                    e.category.children.length > 0 && <UpArrowSvgComponent className={handles.menu_category_body_svg_up} />
                  }
                </div>
              </div>
              {
                e.category.children.map(i => (
                  <div key={getID(6)} style={{ display: e.show ? 'block' : 'none' }}>
                    {i.slug}
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
