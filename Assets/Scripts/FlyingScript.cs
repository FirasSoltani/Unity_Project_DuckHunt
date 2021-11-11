using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FlyingScript : MonoBehaviour
{
    Vector3 pos;
    void Update()
    {
        float newX = Mathf.Sin(Time.time * 1.5f) * 1f + pos.y;
        transform.position = new Vector3(newX, transform.position.y, transform.position.z) ;
        transform.Translate(Vector3.up * Time.deltaTime * 0.4f);
    }
}
