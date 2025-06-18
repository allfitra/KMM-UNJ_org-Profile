const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString('id-ID', options);
};

export default formatDate;
