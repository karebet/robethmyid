const datarobeth = async function(){
    var r=[];
    const url = process.env.URLDATA;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
    return r;
}

export {datarobeth}