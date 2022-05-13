const NAME_LOCALSTORAGE_USER = 'STORES_USER'
const NAME_LOCALSTORAGE_STORES = 'STORES_LIST'
const NAME_LOCALSTORAGE_BOOKMARKS = 'STORES_BOOKMARKS'

const localStorageUser = localStorage.getItem(NAME_LOCALSTORAGE_USER)
const localStorageStores = localStorage.getItem(NAME_LOCALSTORAGE_STORES)
const localStorageBookmarks = localStorage.getItem(NAME_LOCALSTORAGE_BOOKMARKS)

export const ValidateLocalStorage = () => {
  const data = {
    user: {},
    stores: [],
    bookmarks: []
  }

  if (localStorageUser) {
    data.user = JSON.parse(localStorageUser)
  } else {
    localStorage.setItem(NAME_LOCALSTORAGE_USER, JSON.stringify({}))
  }

  if (localStorageStores) {
    data.stores = JSON.parse(localStorageStores)
  } else {
    localStorage.setItem(NAME_LOCALSTORAGE_STORES, JSON.stringify([]))
  }

  if (localStorageBookmarks) {
    data.bookmarks = JSON.parse(localStorageBookmarks)
  } else {
    localStorage.setItem(NAME_LOCALSTORAGE_BOOKMARKS, JSON.stringify([]))
  }

  return data
}

export const SaveUserStoreLocalStorage = (user, stores) => {
  localStorage.setItem(NAME_LOCALSTORAGE_USER, user)
  localStorage.setItem(NAME_LOCALSTORAGE_STORES, stores)
}

export const ClearLocalStorage = () => {
  localStorage.removeItem(NAME_LOCALSTORAGE_USER)
  localStorage.removeItem(NAME_LOCALSTORAGE_STORES)
  localStorage.removeItem(NAME_LOCALSTORAGE_BOOKMARKS)
}

export const SaveBookmarkLocalStorage = data => {
  localStorage.setItem(NAME_LOCALSTORAGE_BOOKMARKS, data)
}
