export default function (data) {
    // Object.keys(data) => //array yapısında keyleri dönüyor (hash kodlar)
    return Object.keys(data)
      .map(key => {
        return {
          id: key,
          ...data[key],
        };
      })
      .sort(function (a, b) {
        return a.date > b.date ? -1 : a.date > b.date ? 1 : 0;
      });
  }
  // return ederken arraye paketleyerek döndürür, bana keyi id
  // olarak ata ve git o datanın hangi keye geliyorsa o datayı da çıkart
  
