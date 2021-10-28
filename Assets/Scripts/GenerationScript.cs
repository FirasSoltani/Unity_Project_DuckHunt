using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GenerationScript : MonoBehaviour
{
    public GameObject[] ballons;
    public Transform spawnPoint;
    public GameObject plane;
    // Update is called once per frame
    void Start()
    {
        StartCoroutine(StartSpawning());
    }

    IEnumerator StartSpawning() {
        yield return new WaitForSeconds(3);
        float x = Random.Range(-0.3f, 0.3f);
        float y = spawnPoint.transform.position.y;
        float z = spawnPoint.transform.position.z;
        int random = Random.Range(0,2);
        spawnPoint.transform.position = new Vector3(x,y,z);
        Instantiate(ballons[random], spawnPoint.transform.position, Quaternion.identity);
        StartCoroutine(StartSpawning());
    }
    
}
