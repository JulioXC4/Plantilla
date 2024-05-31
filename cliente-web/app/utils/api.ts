interface InterfaceReturnData {
    status: number;
    data?: any;
    error?: string;
}
const BACKEND_URI = process.env.NEXT_PUBLIC_BACKEND_URI
/*   export const fetchData = async (
    userId: string,
    accessToken: string
  ): Promise<InterfaceReturnData> => {
    try {
      if (!userId || !accessToken) {
        throw new Error("UserId y accessToken son obligatorios.");
      }
  
      const response = await fetch(`${URL_BACK}/api/pets/user/user`, {
        method: "GET",
        headers: {
          "X-User-Id": `${userId}`,
          Authorization: `${accessToken}`,
        },
      });
  
      if (!response.ok) {
        let errorMessage = "No se pudieron obtener los datos del usuario.";
        try {
          const errorData = await response.json();
          if (errorData && errorData.message) {
            errorMessage = errorData.message;
          }
        } catch (error) {
          console.error("Error al analizar datos de error:", error);
        }
  
        return {
          status: response.status,
          error: errorMessage,
        };
      }
  
      const data = await response.json();
      return {
        status: response.status,
        data,
      };
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      return {
        status: 500,
        error: "Error al obtener los datos del usuario.",
      };
    }
  }; */

export const fetchData = async (

): Promise<InterfaceReturnData> => {
    try {

        const response = await fetch(`${BACKEND_URI}/api/1.0/user/users`, {
            method: "GET",

        });

        if (!response.ok) {
            let errorMessage = "No se pudieron obtener los datos del usuario.";
            try {
                const errorData = await response.json();
                if (errorData && errorData.message) {
                    errorMessage = errorData.message;
                }
            } catch (error) {
                console.error("Error al analizar datos de error:", error);
            }

            return {
                status: response.status,
                error: errorMessage,
            };
        }

        const data = await response.json();
        return {
            status: response.status,
            data,
        };
    } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
        return {
            status: 500,
            error: "Error al obtener los datos del usuario.",
        };
    }
};