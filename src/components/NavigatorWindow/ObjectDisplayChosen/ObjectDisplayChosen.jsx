import './ObjectDisplayChosen.css'

const defaultTag = 'h3'

/**
 * + SR все хорошо
 * + простой
 * + семантика
 * 
 * - поведение без аватара
 */
export const ObjectDisplayChosen = ({selectedItem, as}) => {
    const Tag = as ?? defaultTag

    return(
        selectedItem.name !== "" && (
        <header className="display-chosen">
            <img src={selectedItem.avatar} className="avatar"/>
            <Tag>{selectedItem.name}</Tag> {/* jsx('h3' | as, ...) */}
        </header>
        )
    )
}