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
           Debug.Log(hit.transform.parent.name);
           if(string.Equals("balloon1(Clone)",hit.transform.parent.name) || string.Equals(hit.transform.parent.name, "balloon2(Clone)") || hit.transform.parent.name == "balloon3(Clone)") {
               GameObject obj = hit.transform.parent.gameObject;
               Destroy(obj); 
               Instantiate(smoke, hit.point, Quaternion.LookRotation(hit.normal));
               Debug.Log("Hit");
           }
       }
   }
}
