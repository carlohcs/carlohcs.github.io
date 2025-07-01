export const formatDate = (dateString) => {
  const date = new Date(dateString)

  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
