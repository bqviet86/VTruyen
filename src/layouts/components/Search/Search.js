import classNames from 'classnames/bind'
import { Icon } from '@iconify/react'
import { useState } from 'react'

import SearchForm from './SearchForm'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)

function Search() {
    const [showSearchForm, setShowSearchForm] = useState(false)

    const handleOpenSearchForm = () => {
        setShowSearchForm(true)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-input')} onClick={handleOpenSearchForm}>
                Tìm truyện...
            </div>
            <button className={cx('search-btn')}>
                <Icon icon="material-symbols:search-rounded" />
            </button>
            <SearchForm showSearchForm={showSearchForm} setShowSearchForm={setShowSearchForm} />
        </div>
    )
}

export default Search
