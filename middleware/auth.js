export default function ({store, redirect, route}) {
  if (!store.getters.hasToken) {
    redirect(`/login?message=login&path=${route.path}`)
  }
}
