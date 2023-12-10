import { useState } from "react";
import { Form } from "react-bootstrap";
import { useCarStore } from "../../store/carStore";

function CloudinaryUpload() {
  const setImageUrl = useCarStore((state) => state.setImageUrl);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dekrhuwfp/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        if (response.ok) {
          const result = await response.json();
          const imageUrl = result.secure_url;
          setImageUrl(imageUrl);

          setIsLoading(false);
          console.log("success");
        } else {
          console.error("Failed to upload image to Cloudinary");
        }
      } catch (error) {
        console.error("Error uploading image to Cloudinary", error);
      }
    }
  }
  return (
    <div>
      <Form.Control type="file" accept="image/*" onChange={handleUpload} />
      {isLoading && <Form.Text className="mt-2">Uploading...</Form.Text>}
      {isLoading === false && (
        <Form.Text className="mt-2" style={{ color: "green" }}>
          Success Upload
        </Form.Text>
      )}
    </div>
  );
}

export default CloudinaryUpload;
