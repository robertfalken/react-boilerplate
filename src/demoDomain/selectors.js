const getTitle = ({ demoDomain: { base: { title } } }) => title
const getLoading = ({ demoDomain: { base: { loading } } }) => loading

export default {
  getTitle,
  getLoading,
}
