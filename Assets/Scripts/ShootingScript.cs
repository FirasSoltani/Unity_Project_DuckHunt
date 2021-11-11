using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class ShootingScript : MonoBehaviour
{

    public GameObject arCamera;
    public GameObject smoke;
    public Text text;
    public Text textScore;
    private int score = 0;
    private int ammoCount = 3;
    public Text gameOver;
    public GameObject GameOverPanel;


    public void shoot() {
       RaycastHit hit;
        if(ammoCount == 0)
        {
            text.gameObject.SetActive(true);
        }
        if (Physics.Raycast(arCamera.transform.position, arCamera.transform.forward, out hit)) {
           Debug.Log(hit.transform.name);
           if(ammoCount > 0) {
            ammoCount++;
            text.text = ammoCount.ToString();
            score += 100;
            textScore.text = "Score : "+ score.ToString();
           }
           if(string.Equals("DuckObject(Clone)",hit.transform.name) || string.Equals("DuckObject",hit.transform.name)) {
               GameObject obj = hit.transform.gameObject;
               Destroy(obj); 
               Instantiate(smoke, hit.point, Quaternion.LookRotation(hit.normal));
               Debug.Log("Hit");
           }
       } else {
           if(ammoCount > 0) {
            ammoCount --;
            text.text = ammoCount.ToString();
            score -= 50;
            textScore.text = "Score : "+ score.ToString();
                if (ammoCount == 0)
                {
                    GameOverPanel.SetActive(true);
                }

            }
        }
       Debug.Log(ammoCount);
   }
}
