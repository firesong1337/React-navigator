import './ObjectDisplay.css'
import {emptyAvatarHandler} from '../../Helper/Helper.js'

/**
 * + достаточно тупой (за исключением комментариев)
 * + почти выполняется SR
 * + нормальная верстка и css
 *  
 * - бизнес-логика в компоненте
 */
export const ObjectDisplay = ({displayedData, onSelect, connectionData }) => {
// это не должны быть тут
// на уровне получения и подготовки данных
    emptyAvatarHandler(displayedData)

    let getData = displayedData

    // Часть бизнес-логики
    // не должна быть в компоненте
    if (connectionData.length !== 0) {
        getData = getData.filter(data => connectionData.includes(data.id))
    }
   
    const handleItemClick = (item) => {
        // ...
        onSelect(item);
      };
    
    return(
        <div className="object-list">
            {getData.map(item => (
                <div key={item.id} onClick={() => handleItemClick(item)} className="object-item">
                    <img src={item.avatar} className="object-avatar"/>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}
/**
 * сначала key ref(реактовская штука)
 * затем className, id, name ...
 * кастомные html атрибуты (data-) [очень часто data-testid]
 * потом пропсы для отображения/кастомные пропсы (библиотек)
 * aria-attributes и тому подобные(role)
 * handlers
 */