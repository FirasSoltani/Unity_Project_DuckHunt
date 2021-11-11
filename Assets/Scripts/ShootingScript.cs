using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShootingScript : MonoBehaviour
{

    public GameObject arCamera;
    public GameObject smoke;
   
   public void shoot() {
       RaycastHit hit;
       if(Physics.Raycast(arCamera.transform.position, arCamera.transform.forward, out hit)) {
           Debug.Log(hit.transform.name);
           if(string.Equals("DuckObject(Clone)",hit.transform.name) || string.Equals("DuckObject",hit.transform.name)) {
               GameObject obj = hit.transform.gameObject;
               Destroy(obj); 
               Instantiate(smoke, hit.point, Quaternion.LookRotation(hit.normal));
               Debug.Log("Hit");
           }
       }
   }
}
