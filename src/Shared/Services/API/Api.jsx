export async function getTrainingDataImages() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const myObject = [
                {
                    id: '02863e47-8565-4c0d-ac39-5c3b69762fee',
                    fileName: 'vid_4_3140.jpg',
                    target: 'car'
                },
                {
                    id: '02863e47-8565-5gfs-ac39-5c3b69762gfe',
                    fileName: 'vid_4_14480.jpg',
                    target: 'car'
                }
            ];
            resolve(myObject);
        }, 300);
    });
}
