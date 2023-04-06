export function parseJSONToFormData(data: any): FormData {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] instanceof File) {
      //formData.append(key, data[key]);
      formData.append("picture", data[key]);
      formData.append("picturePath", data[key].name);
    } else {
      formData.append(key, data[key]);
    }
  });
  return formData;
}
